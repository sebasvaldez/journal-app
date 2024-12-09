import { JournalLayout } from "../layout/JournalLayout";
import { NOthingSelectedView, NoteView } from "../views/";




export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NOthingSelectedView /> */}

      <NoteView />
    </JournalLayout>
  );
};