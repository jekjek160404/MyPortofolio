"use client";
import { useState, useEffect } from "react";
import Card from "../../../../components/cards";

export default function AdminMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/mesage"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        setMessages(data.data); // Adjust based on the API response structure
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleAction = (id) => {
    // Define your action here (e.g., delete or edit)
    console.log(`Action for message ID: ${id}`);
  };

  return (
    <>
      <Card title="List Of Message" className="mt-20">
        <table className="w-full border-collapse mt-5">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">No</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Message</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data for illustration */}
            {messages.map((message, index) => (
              <tr key={message.id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{message.Name}</td>
                <td className="border border-gray-300 p-2">{message.Email}</td>
                <td className="border border-gray-300 p-2">
                  {message.Subject}
                </td>
                <td className="border border-gray-300 p-2">
                  {message.Message}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => handleReply(message.id)}
                    className="bg-gray-500 text-white px-2 py-2 rounded-l"
                  >
                    Balas
                  </button>
                  <button
                    onClick={() => handleArchive(message.id)}
                    className="bg-yellow-500 text-white px-2 py-2 rounded-r"
                  >
                    Arsipkan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
