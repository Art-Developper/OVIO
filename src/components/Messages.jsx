import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions'; // Import for Cloud Functions
import { app } from '../firebaseConfig'; // Ձեր Firebase կոնֆիգուրացիան

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [currentMessageToReply, setCurrentMessageToReply] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [sendingReply, setSendingReply] = useState(false); // Պատասխանն ուղարկելու կարգավիճակը

  const db = getFirestore(app);
  const functions = getFunctions(app); // Get the Functions instance
  const sendReplyEmail = httpsCallable(functions, 'sendReplyEmail'); // Get the callable function

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inquiries"));
        const fetchedMessages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
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

    setSendingReply(true); // Սկսում ենք ուղարկելը

    try {
      const result = await sendReplyEmail({
        to: currentMessageToReply.email,
        subject: `Ձեր հարցման պատասխանը (${currentMessageToReply.name}-ին)`, // Կարող եք հարմարեցնել
        text: replyContent,
      });

      if (result.data.success) {
        alert("Պատասխան նամակն հաջողությամբ ուղարկվեց։");
      } else {
        alert("Սխալ առաջացավ նամակն ուղարկելիս։ " + result.data.message);
      }
    } catch (err) {
      console.error("Սխալ Cloud Function-ը կանչելիս։", err);
      alert("Սխալ առաջացավ նամակն ուղարկելիս։ " + (err.message || "Խնդրում ենք փորձել կրկին։"));
    } finally {
      setSendingReply(false); // Ավարտում ենք ուղարկելը
      setReplyModalOpen(false);
      setCurrentMessageToReply(null);
      setReplyContent('');
    }
  };

  if (loading) {
    return <div className="text-center text-lg text-gray-600 mt-10">Նամակները բեռնվում են...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600 font-bold mt-10">Սխալ: {error}</div>;
  }

  if (messages.length === 0) {
    return <div className="text-center text-lg text-gray-600 mt-10">Նամակներ չեն հայտնաբերվել։</div>;
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
              <span className="text-xl font-semibold text-gray-900">{message.name}</span>
              <span className="text-sm text-gray-500">{new Date(message.timestamp.seconds * 1000).toLocaleString()}</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong className="font-medium">Էլ. հասցե:</strong> {message.email}
            </p>
            <p className="text-gray-800 leading-relaxed flex-grow mb-4">
              {message.message}
            </p>
            {message.phone && (
              <p className="text-gray-700 text-sm mb-4">
                <strong className="font-medium">Հեռախոս:</strong> {message.phone}
              </p>
            )}
            <button
              className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 self-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => handleReplyClick(message)}
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
              Պատասխանել {currentMessageToReply.name}-ին
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              <strong className="font-medium">Էլ. հասցե:</strong> {currentMessageToReply.email}
            </p>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 text-gray-800 focus:ring-blue-500 focus:border-blue-500 resize-y min-h-[120px] outline-none transition-all duration-200"
              rows="8"
              placeholder="Մուտքագրեք ձեր պատասխանը այստեղ..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => setReplyModalOpen(false)}
                disabled={sendingReply} // Disable while sending
              >
                Չեղարկել
              </button>
              <button
                className="bg-green-500 text-white py-2 px-5 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleSendReply}
                disabled={sendingReply} // Disable while sending
              >
                {sendingReply ? 'Ուղարկվում է...' : 'Ուղարկել'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;