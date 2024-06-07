import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ZcDiv from './zc-div';
const elements = [{ component: <ZcDiv /> }];
const components = () => {
  return (
    <Accordion type="multiple" defaultValue={['layout', 'custom']}>
      <AccordionItem value="custom">
        <AccordionTrigger className="!no-underline">custom</AccordionTrigger>
        <AccordionContent>
          {elements.map((element, idx) => (
            <div key={idx}>{element.component}</div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default components;
