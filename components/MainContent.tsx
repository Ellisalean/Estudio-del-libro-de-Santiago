import { SectionId } from '../constants.tsx';
import AuthorView from './AuthorView';
import ContributionView from './ContributionView';
import ContextView from './ContextView';
import IntroView from './IntroView';
import PurposeView from './PurposeView';
import StructureView from './StructureView';
import StyleView from './StyleView';
import Trivia from './Trivia';


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
                [SectionId.TRIVIA]: <Trivia />,
            }[activeSection] || <div>Selecciona una sección</div>
        }
    </div>
  )
};

export default MainContent;