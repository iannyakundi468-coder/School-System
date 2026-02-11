import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { CreateAnnouncementModal } from '../../components/communication/CreateAnnouncementModal';
import { Search, Plus, Bell, MessageSquare, Send, User, Users } from 'lucide-react';
// ... (rest of imports)

// Mock Data
const INITIAL_ANNOUNCEMENTS = [
    { id: 1, title: 'School Closed Tomorrow', content: 'Due to heavy rains, the school will be closed tomorrow. Stay safe!', sender: 'Principal James', date: '2 hrs ago', type: 'urgent' },
    { id: 2, title: 'Sports Day Rescheduled', content: 'The inter-house sports day has been moved to next Friday.', sender: 'Admin', date: '1 day ago', type: 'info' },
];

const MOCK_CHATS = [
    { id: 1, name: 'Mrs. Alice (Class Teacher)', lastMessage: 'Ian is doing great in Math!', time: '10:30 AM', unread: 2, role: 'Staff' },
    { id: 2, name: 'Mr. John (Coach)', lastMessage: 'Football practice is at 4pm.', time: 'Yesterday', unread: 0, role: 'Staff' },
];

const MOCK_COMMUNITY_MSGS = [
    { id: 1, sender: 'Mrs. Alice', content: 'Reminder: PTA meeting is next Tuesday at 5pm.', time: '10:00 AM', role: 'Staff' },
    { id: 2, sender: 'John\'s Dad', content: 'Will there be parking available?', time: '10:05 AM', role: 'Guardian' },
    { id: 3, sender: 'Admin', content: 'Yes, the main field will be open for parking.', time: '10:10 AM', role: 'Admin' },
];

// Mock Initial Messages for Chat 1
const CHAT_1_MESSAGES = [
    { id: 1, text: 'Hello Mr. Doe, I wanted to let you know Ian is improving in Math.', sender: 'them', time: '10:30 AM' },
    { id: 2, text: 'That is great news! Thank you for the update.', sender: 'me', time: '10:32 AM' },
];

export const MessagesPage = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState<'inbox' | 'announcements' | 'community'>('announcements');
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [announcements, setAnnouncements] = useState(INITIAL_ANNOUNCEMENTS);

    // Chat State
    const [chatMessages, setChatMessages] = useState(CHAT_1_MESSAGES);
    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handlePostAnnouncement = (newAnnouncement: any) => {
        setAnnouncements([newAnnouncement, ...announcements]);
    };

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const msg = {
            id: Date.now(),
            text: newMessage,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setChatMessages([...chatMessages, msg]);
        setNewMessage('');
        setIsTyping(true);

        // Simulate Reply
        setTimeout(() => {
            const reply = {
                id: Date.now() + 1,
                text: "Thanks for reaching out! We can discuss this further during the parent-teacher meeting.",
                sender: 'them',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setChatMessages(prev => [...prev, reply]);
            setIsTyping(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto h-[calc(100vh-100px)] flex flex-col">
                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">Communication Hub</h1>
                        <p className="text-gray-400">Stay connected with the school community.</p>
                    </div>
                    {user?.role === 'admin' && (
                        <Button variant="glass" className="gap-2" onClick={() => setShowModal(true)}>
                            <Plus className="w-4 h-4" /> New Announcement
                        </Button>
                    )}
                </header>

                {showModal && (
                    <CreateAnnouncementModal
                        onClose={() => setShowModal(false)}
                        onPost={handlePostAnnouncement}
                    />
                )}

                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('announcements')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === 'announcements' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'text-gray-400 hover:bg-slate-800'}`}
                    >
                        <Bell className="w-4 h-4" /> Announcements
                    </button>
                    <button
                        onClick={() => setActiveTab('inbox')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === 'inbox' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'text-gray-400 hover:bg-slate-800'}`}
                    >
                        <MessageSquare className="w-4 h-4" /> Inbox
                    </button>
                    <button
                        onClick={() => setActiveTab('community')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === 'community' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50' : 'text-gray-400 hover:bg-slate-800'}`}
                    >
                        <Users className="w-4 h-4" /> Community
                    </button>
                </div>

                <div className="flex-1 grid md:grid-cols-12 gap-6 overflow-hidden">
                    {/* Sidebar / List */}
                    <Card className={`md:col-span-4 flex flex-col h-full ${activeTab === 'community' ? 'hidden' : (selectedChat ? 'hidden md:flex' : 'flex')}`}>
                        <div className="mb-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                            {activeTab === 'announcements' ? (
                                announcements.map(item => (
                                    <div key={item.id} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${item.type === 'urgent' ? 'bg-rose-500/20 text-rose-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                                {item.type}
                                            </span>
                                            <span className="text-xs text-gray-500">{item.date}</span>
                                        </div>
                                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-gray-400 line-clamp-2">{item.content}</p>
                                        <p className="text-xs text-emerald-500 mt-2 flex items-center gap-1">
                                            <Bell className="w-3 h-3" /> {item.sender}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                MOCK_CHATS.map(chat => (
                                    <div
                                        key={chat.id}
                                        onClick={() => setSelectedChat(chat.id)}
                                        className={`p-3 rounded-lg border transition-colors cursor-pointer flex gap-3 ${selectedChat === chat.id ? 'bg-blue-500/10 border-blue-500/50' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                                            <User className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                                                <span className="text-xs text-gray-500">{chat.time}</span>
                                            </div>
                                            <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
                                        </div>
                                        {chat.unread > 0 && (
                                            <div className="shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                                                {chat.unread}
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </Card>

                    {/* Content Area */}
                    <Card className={`${activeTab === 'community' ? 'md:col-span-12' : 'md:col-span-8'} h-full flex flex-col ${selectedChat || activeTab === 'announcements' || activeTab === 'community' ? 'flex' : 'hidden md:flex'}`}>
                        {activeTab === 'announcements' ? (
                            <div className="h-full flex items-center justify-center text-gray-500 flex-col gap-4">
                                <Bell className="w-12 h-12 opacity-20" />
                                <p>Select an announcement to view details</p>
                            </div>
                        ) : activeTab === 'community' ? (
                            <>
                                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                                            <Users className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Solian Community</h3>
                                            <p className="text-xs text-gray-400">1,240 Members • 45 Online</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
                                    {MOCK_COMMUNITY_MSGS.map(msg => (
                                        <div key={msg.id} className={`flex gap-3 ${msg.sender === 'Admin' ? 'justify-end' : 'justify-start'}`}>
                                            {msg.sender !== 'Admin' && (
                                                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                                                    <span className="text-xs font-bold">{msg.sender[0]}</span>
                                                </div>
                                            )}
                                            <div className={`rounded-2xl px-4 py-2 max-w-[80%] ${msg.sender === 'Admin' ? 'bg-amber-500/20 text-amber-100 rounded-tr-none' :
                                                msg.role === 'Staff' ? 'bg-emerald-500/10 text-emerald-100 rounded-tl-none' :
                                                    'bg-slate-800 text-gray-200 rounded-tl-none'
                                                }`}>
                                                <p className="text-xs font-bold mb-1 opacity-70 flex justify-between gap-4">
                                                    {msg.sender} <span className="text-[10px] font-normal opacity-50">{msg.role}</span>
                                                </p>
                                                <p className="text-sm">{msg.content}</p>
                                                <span className="text-[10px] opacity-40 block mt-1 text-right">{msg.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Input label="" placeholder="Message the community..." className="flex-1" />
                                    <Button className="w-12 h-12 p-0 flex items-center justify-center rounded-lg">
                                        <Send className="w-5 h-5" />
                                    </Button>
                                </div>
                            </>
                        ) : selectedChat ? (
                            <>
                                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                                    <div className="flex items-center gap-3">
                                        <Button variant="glass" className="md:hidden h-8 w-8 p-0 flex items-center justify-center" onClick={() => setSelectedChat(null)}>
                                            ←
                                        </Button>
                                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Mrs. Alice</h3>
                                            <p className="text-xs text-emerald-400 flex items-center gap-1">● Online {isTyping && <span className="animate-pulse ml-1 text-gray-500">Typing...</span>}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
                                    {chatMessages.map((msg) => (
                                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`rounded-2xl px-4 py-2 max-w-[80%] ${msg.sender === 'me' ? 'bg-emerald-500/20 text-emerald-100 rounded-tr-none' : 'bg-slate-800 rounded-tl-none'}`}>
                                                <p className="text-sm">{msg.text}</p>
                                                <span className={`text-[10px] block mt-1 ${msg.sender === 'me' ? 'text-emerald-400/50' : 'text-gray-500'}`}>{msg.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <Input
                                        label=""
                                        placeholder="Type a message..."
                                        className="flex-1"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    />
                                    <Button className="w-12 h-12 p-0 flex items-center justify-center rounded-lg" onClick={handleSendMessage}>
                                        <Send className="w-5 h-5" />
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500 flex-col gap-4">
                                <MessageSquare className="w-12 h-12 opacity-20" />
                                <p>Select a conversation to start chatting</p>
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};
