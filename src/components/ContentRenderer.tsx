import React from 'react';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export default function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  return (
    <div 
      className={`rich-content prose max-w-none text-gray-800 ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
