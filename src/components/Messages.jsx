import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '../fireBaseConfig';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [currentMessageToReply, setCurrentMessageToReply] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [sendingReply, setSendingReply] = useState(false);

  const db = getFirestore(app);
  const functions = getFunctions(app);

  // Փոխված ֆունկցիայի անունը՝ saveInquiryReplyToFirestore
  const saveInquiryReplyToFirestore = httpsCallable(functions, 'saveInquiryReplyToFirestore');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inquiries"));
        const fetchedMessages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        fetchedMessages.sort((a, b) => {
          if (!a.timestamp || !b.timestamp) return 0;
          // Ունենալու համար, որ ավելի նոր հարցումները վերևում լինեն
          const timeA = a.timestamp ? a.timestamp.seconds : 0;
          const timeB = b.timestamp ? b.timestamp.seconds : 0;
          return timeB - timeA;
        });
        setMessages(fetchedMessages);
      } catch (err) {
        console.error("Նամակները բեռնելիս սխալ առաջացավ: ", err);
        setError("Հնարավոր չեղավ բեռնել նամակները։");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [db]);

  const handleReplyClick = (message) => {
    setCurrentMessageToReply(message);
    setReplyModalOpen(true);
    setReplyContent('');
  };

  const handleSendReply = async () => {
    if (!currentMessageToReply || !replyContent.trim()) {
      alert("Խնդրում ենք մուտքագրել պատասխան։");
      return;
    }
    // Էլ. հասցեի ստուգումն այլևս խիստ անհրաժեշտ չէ, եթե էլ. փոստ չենք ուղարկում,
    // բայց կարող է օգտակար լինել Firestore-ում պահելու համար:
    // if (!currentMessageToReply.email) {
    //   alert("Հարցումը չունի էլ. հասցե, հնարավոր չէ պատասխան ուղարկել։");
    //   return;
    // }

    setSendingReply(true);

    try {
      // Կանչում ենք նոր անունով ֆունկցիան
      const result = await saveInquiryReplyToFirestore({
        recipientEmail: currentMessageToReply.email || null, // Անցկացնում ենք էլ. հասցեն (կարող է լինել null)
        recipientName: currentMessageToReply.name || 'Հաճախորդ',
        originalMessage: currentMessageToReply.message,
        replyContent: replyContent,
        inquiryId: currentMessageToReply.id,
      });

      if (result.data && result.data.success) {
        alert("Պատասխանն հաջողությամբ պահպանվեց տվյալների բազայում։"); // Փոփոխված հաղորդագրություն
      } else {
        alert("Սխալ առաջացավ պատասխանը պահպանելիս։ " + (result.data && result.data.message ? result.data.message : "Անհայտ սխալ։"));
      }
    } catch (err) {
      console.error("Սխալ Cloud Function-ը կանչելիս։", err);
      alert("Սխալ առաջացավ պատասխանը պահպանելիս։ " + (err.message || "Խնդրում ենք փորձել կրկին։"));
    } finally {
      setSendingReply(false);
      setReplyModalOpen(false);
      setCurrentMessageToReply(null);
      setReplyContent('');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-xl text-gray-600 animate-pulse">Նամակները բեռնվում են...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-xl text-red-600 font-bold">Սխալ: {error}</div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-xl text-gray-600">Նամակներ չեն հայտնաբերվել։</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10 relative">
        Մուտքային Հարցումներ
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3 rounded"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {messages.map(message => (
          <div key={message.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col border border-gray-200">
            <div className="flex justify-between items-start mb-4 pb-3 border-b border-gray-100">
              <span className="text-xl font-semibold text-gray-900">{message.name || 'Անանուն'}</span>
              <span className="text-sm text-gray-500">
                {message.timestamp ? new Date(message.timestamp.seconds * 1000).toLocaleString() : 'Անհայտ ամսաթիվ'}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong className="font-medium">Էլ. հասցե:</strong> {message.email || 'Չկա'}
            </p>
            <p className="text-gray-800 leading-relaxed flex-grow mb-4">
              {message.message || 'Չկա հաղորդագրություն'}
            </p>
            {message.phone && (
              <p className="text-gray-700 text-sm mb-4">
                <strong className="font-medium">Հեռախոս:</strong> {message.phone}
              </p>
            )}
            <button
              className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 self-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => handleReplyClick(message)}
            // Անջատում ենք նույնիսկ եթե էլ հասցե չկա, քանի որ էլ հասցեն պարտադիր չէ Firestore-ում պատասխան պահելու համար
            // բայց եթե ցանկանում եք, որ հարցումներին պատասխանելու հնարավորություն լինի միայն էլ. հասցե ունեցողների համար, կարող եք թողնել disabled={!message.email}
            // Այս դեպքում, ես այն բաց եմ թողնում, որպեսզի միշտ հնարավոր լինի պահպանել պատասխանը Firestore-ում:
            >
              Պատասխանել
            </button>
          </div>
        ))}
      </div>

      {replyModalOpen && currentMessageToReply && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg animate-scale-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Պատասխանել {currentMessageToReply.name || 'Հաճախորդին'}
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              <strong className="font-medium">Էլ. հասցե:</strong> {currentMessageToReply.email || 'Չկա'}
            </p>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 text-gray-800 focus:ring-blue-500 focus:border-blue-500 resize-y min-h-[120px] outline-none transition-all duration-200"
              rows="8"
              placeholder="Մուտքագրեք ձեր պատասխանը այստեղ..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              disabled={sendingReply}
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => setReplyModalOpen(false)}
                disabled={sendingReply}
              >
                Չեղարկել
              </button>
              <button
                className="bg-green-500 text-white py-2 px-5 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleSendReply}
                disabled={sendingReply || !replyContent.trim()}
              >
                {sendingReply ? (
                  <svg className="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Ուղարկել'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;