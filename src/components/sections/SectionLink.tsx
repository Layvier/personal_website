import * as React from 'react';
import { Link } from '@chakra-ui/layout';
import { Link as ScrollLink } from 'react-scroll';
import { SectionIds } from '../../pages';

export const SectionLink: React.FC<{ sectionId: SectionIds; onScrollActive?: (sectionId: SectionIds) => void }> = ({
  sectionId,
  onScrollActive,
  children,
}) => {
  return (
    <ScrollLink
      onSetActive={() => onScrollActive && onScrollActive(sectionId)}
      activeClass="active_section_link"
      to={sectionId}
      spy={true}
      smooth={true}
      duration={600}
    >
      <Link as="span">{children}</Link>
    </ScrollLink>
  );
};
