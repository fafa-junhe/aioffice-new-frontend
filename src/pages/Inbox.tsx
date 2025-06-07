import {useState, useRef, useEffect} from 'react';
import {
    PlusIcon,
    Cross1Icon,
    ArrowLeftIcon,
    TrashIcon,
    ArrowTopLeftIcon,
} from '@radix-ui/react-icons';
import {LoongButton} from "../components/LoongButton.tsx";
import {MailOpen} from "lucide-react";

// 定义邮件类型
type Email = {
    id: number;
    subject: string;
    sender: string;
    unread: boolean;
    content: string;
    receive_time: string;
};

const dummyEmails: Email[] = [
    {
        id: 1,
        subject: '欢迎使用邮件系统',
        sender: 'admin@example.com',
        unread: true,
        content: '这是你的第一封邮件。感谢您选择我们的服务，我们将竭诚为您提供优质的电子邮件体验。',
        receive_time: '2025-05-24T23:43:30.937Z',
    },
    {
        id: 2,
        subject: '团队建设活动',
        sender: 'aaa@example.com',
        unread: true,
        content: '本季度团队建设活动将于本月25日举行，地点为西山度假村。活动包括团队拓展、烧烤晚宴和篝火晚会。请在本周五前确认是否参加。',
        receive_time: '2025-06-05T23:43:30.937Z',
    },
];

function timeSince(dateString: string) {
    const now = new Date();
    const received = new Date(dateString);
    const seconds = Math.floor((now.getTime() - received.getTime()) / 1000);
    if (seconds < 60) return `${seconds} 秒前`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} 分钟前`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} 小时前`;
    const days = Math.floor(hours / 24);
    return `${days} 天前`;
}

export function Inbox() {
    const [emails, setEmails] = useState(dummyEmails);
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
    const [composeMode, setComposeMode] = useState(false);
    const [newEmail, setNewEmail] = useState({to: '', subject: '', body: ''});
    const [leftWidth, setLeftWidth] = useState(28);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const openEmail = (email: Email) => {
        setEmails((prev) => prev.map((e) => (e.id === email.id ? {...e, unread: false} : e)));
        setSelectedEmail(email);
        setComposeMode(false);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('发送邮件:', newEmail);
        setNewEmail({to: '', subject: '', body: ''});
        setComposeMode(false);
        alert('邮件已发送');
    };

    const replyToEmail = () => {
        if (!selectedEmail) return;
        setNewEmail({
            to: selectedEmail.sender,
            subject: `回复: ${selectedEmail.subject}`,
            body: `\n\n--- 原始邮件 ---\n${selectedEmail.content}`,
        });
        setComposeMode(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging.current || !containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
            setLeftWidth(Math.min(70, Math.max(20, newLeftWidth)));
        };

        const handleMouseUp = () => {
            isDragging.current = false;
            document.body.style.cursor = 'default';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div ref={containerRef} className=" flex h-full">
            <div
                className="bg-gray-1 border-r shadow-2xl "
                style={{width: `${leftWidth}%`}}
            >
                <div className="p-4 space-y-2">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-lg font-semibold ">收件箱
                            ({emails.filter(e => e.unread).length})</h2>
                        <LoongButton
                            onClick={() => {
                                setComposeMode(true);
                                setSelectedEmail(null);
                            }}
                        >
                            <PlusIcon className="w-4 h-4"/> 写邮件
                        </LoongButton>
                    </div>
                    {emails.map((email) => (
                        <div
                            key={email.id}
                            onClick={() => openEmail(email)}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedEmail?.id === email.id ? 'bg-accent-4 shadow-[0_0_6px_2px_var(--red-4)] border-accent-4' : 'hover:bg-accent-4'}`}
                        >
                            <div className="flex justify-between items-center">
                                <div className="font-medium flex items-center gap-2">
                                    {email.subject}
                                    {email.unread && <span
                                        className="text-xs bg-accent-3 rounded px-2 py-0.5">未读</span>}
                                </div>
                                <span className="text-xs ">{timeSince(email.receive_time)}</span>
                            </div>
                            <div className="text-sm truncate">{email.sender}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="w-1.5 cursor-col-resize bg-gray-3 hover:bg-accent-3"
                onMouseDown={() => {
                    isDragging.current = true;
                    document.body.style.cursor = 'col-resize';
                }}
            />

            <div className="flex-1 h-full overflow-y-auto bg-gray-1">
                {composeMode ? (
                    <form onSubmit={sendEmail} className="p-6 max-w-3xl mx-auto space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold ">撰写邮件</h2>
                            <button type="button" onClick={() => setComposeMode(false)}>
                                <Cross1Icon className="w-5 h-5 "/>
                            </button>
                        </div>
                        <input type="email" placeholder="收件人" value={newEmail.to}
                               onChange={(e) => setNewEmail({...newEmail, to: e.target.value})}
                               className="text-gray-12 dark:text-gray-1 w-full p-3 border rounded-lg "
                               required/>
                        <input type="text" placeholder="主题" value={newEmail.subject}
                               onChange={(e) => setNewEmail({...newEmail, subject: e.target.value})}
                               className="text-gray-12 dark:text-gray-1 w-full p-3 border rounded-lg "
                               required/>
                        <textarea rows={8} placeholder="内容..." value={newEmail.body}
                                  onChange={(e) => setNewEmail({...newEmail, body: e.target.value})}
                                  className="text-gray-12 dark:text-gray-1 w-full p-3 border rounded-lg "
                                  required/>
                        <div className="flex space-x-2">
                            <LoongButton>
                                <ArrowTopLeftIcon className="mr-2"/>发送
                            </LoongButton>
                            <LoongButton level="normal" onClick={() => setComposeMode(false)}>
                                <Cross1Icon className="mr-2"/>取消
                            </LoongButton>
                        </div>
                    </form>
                ) : selectedEmail ? (
                    <div className="p-6 max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold ">{selectedEmail.subject}</h2>
                            <div className="flex space-x-2">
                                <LoongButton>
                                    <TrashIcon />
                                </LoongButton>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                            来自: {selectedEmail.sender} · {timeSince(selectedEmail.receive_time)}
                        </div>
                        <p className="text-gray-700 whitespace-pre-line">{selectedEmail.content}</p>
                        <div className="mt-6">
                            <LoongButton onClick={replyToEmail}>
                                <ArrowLeftIcon className="mr-2"/> 回复
                            </LoongButton>
                        </div>
                    </div>
                ) : <div className="flex flex-col items-center justify-center h-full ">
                    <MailOpen className="text-3xl size-16 text-gray-9"/>
                    <h3 className="text-xl font-medium mb-2">欢迎来到邮件系统</h3>
                    <p className="max-w-md text-center mb-6">
                        选择一封邮件开始阅读，或者点击"写邮件"按钮开始撰写新邮件
                    </p>
                </div>}
            </div>
        </div>
    );
}