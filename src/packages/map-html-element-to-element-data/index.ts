import PerryElementData from '@/interfaces/PerryElementData';

const mapClassListToArray =
  (classList: DOMTokenList = ({} as DOMTokenList)): ReadonlyArray<string> => 
    [].slice.call(classList);

export default (element: HTMLElement): PerryElementData => ({
  id: element.id,
  dataset: element.dataset,
  tagName: element.tagName,
  nodeName: element.nodeName,
  className: element.className,
  classList: mapClassListToArray(element.classList),
  textContent: element.textContent,
  disabled: (element as HTMLButtonElement).disabled,
});
