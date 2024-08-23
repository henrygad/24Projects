import Richtexteditor from '../components/rich-text-editor'

const Editor = () => {

  return <div className=' flex flex-col items-center pt-20 gap-4'>
    <Richtexteditor
      placeHolder='start typing...'
      editorParentWrapperStyle={'max-w-[680px] space-y-2'}
      toolbarWrapperStyle={'flex flex-wrap gap-2 border p-3 rounded'}
      texAreaStyle={'min-h-[400px] w-[680px] p-3 rounded'}
    />
  </div>
};

export default Editor;
