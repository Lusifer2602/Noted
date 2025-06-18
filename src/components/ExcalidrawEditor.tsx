import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';

interface ExcalidrawEditorProps {
  onSave: (drawingData: string) => void;
  initialDrawing?: string;
}

const ExcalidrawEditor: React.FC<ExcalidrawEditorProps> = ({ onSave, initialDrawing }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Excalidraw
        initialData={initialDrawing ? JSON.parse(initialDrawing) : undefined}
        onChange={(elements, appState) => {
          onSave(JSON.stringify({ elements, appState }));
        }}
      />
    </div>
  );
};

export default ExcalidrawEditor;