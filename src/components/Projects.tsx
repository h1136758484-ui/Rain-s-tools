import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import Toast from "./Toast";

export default function Projects() {
  const [toastMsg, setToastMsg] = useState("");
  const [modalData, setModalData] = useState<{isOpen: boolean, url: string}>({isOpen: false, url: ""});

  const showToast = (msg: string) => {
    setToastMsg(msg);
    // Clear after 2 seconds
    setTimeout(() => setToastMsg(""), 2000);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`已复制 ${type}`);
    } catch (err) {
      showToast("复制失败");
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map(p => (
          <ProjectCard 
            key={p.id} 
            project={p} 
            onCopyPrompt={() => copyToClipboard(p.promptText, "Prompt")}
            onCopyGithub={() => copyToClipboard(p.githubUrl, "GitHub 链接")}
            onOpenGemini={() => setModalData({isOpen: true, url: p.geminiShareUrl})}
          />
        ))}
      </div>
      
      <Toast message={toastMsg} />
      <Modal 
        isOpen={modalData.isOpen} 
        url={modalData.url} 
        onClose={() => setModalData({isOpen: false, url: ""})} 
        onCopy={() => copyToClipboard(modalData.url, "分享链接")}
      />
    </section>
  );
}
