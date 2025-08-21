import { SectionId } from '../constants.tsx';
import AuthorView from './AuthorView.tsx';
import ContributionView from './ContributionView.tsx';
import ContextView from './ContextView.tsx';
import IntroView from './IntroView.tsx';
import PurposeView from './PurposeView.tsx';
import StructureView from './StructureView.tsx';
import StyleView from './StyleView.tsx';
import Trivia from './Trivia.tsx';
import Chapter1View from './Chapter1View.tsx';
import Chapter2View from './Chapter2View.tsx';
import Chapter3View from './Chapter3View.tsx';
import Chapter4View from './Chapter4View.tsx';
import Chapter5View from './Chapter5View.tsx';


interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  return (
    <div className="animate-fade-in">
        {
            {
                [SectionId.INTRO]: <IntroView />,
                [SectionId.AUTHOR]: <AuthorView />,
                [SectionId.CONTEXT]: <ContextView />,
                [SectionId.PURPOSE]: <PurposeView />,
                [SectionId.STYLE]: <StyleView />,
                [SectionId.STRUCTURE]: <StructureView />,
                [SectionId.CONTRIBUTION]: <ContributionView />,
                [SectionId.CHAPTER_1]: <Chapter1View />,
                [SectionId.CHAPTER_2]: <Chapter2View />,
                [SectionId.CHAPTER_3]: <Chapter3View />,
                [SectionId.CHAPTER_4]: <Chapter4View />,
                [SectionId.CHAPTER_5]: <Chapter5View />,
                [SectionId.TRIVIA]: <Trivia />,
            }[activeSection] || <div>Selecciona una sección</div>
        }
    </div>
  )
};

export default MainContent;