"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import { Bold, Strikethrough, Italic, UnderlineIcon } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-2 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-purple-700 text-white p-2 rounded-lg"
              : ""
          }
        >
          <Bold className="w-3 h-3" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-purple-700 text-white p-2 rounded-lg"
              : ""
          }
        >
          <Italic className="w-3 h-3" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-purple-700 text-white p-2 rounded-lg"
              : ""
          }
        >
          <UnderlineIcon className="w-3 h-3" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-purple-700 text-white p-2 rounded-lg"
              : ""
          }
        >
          <Strikethrough className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const TextEditor = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    content: content,
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "truncate flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default TextEditor;
