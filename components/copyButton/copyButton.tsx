
import React from 'react';
import { classes } from 'helpers';

import {
  Copy
} from './copyButton.styles';
import { CopyIcon } from 'components/icons';

export interface CopyButtonProps {
  className?: string;
  value?: string;
}

export const CopyButton = ({ value, className }: CopyButtonProps) => {

  const [isCopied, setIsCopied] = React.useState<any>(false);
  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(value ?? '')
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Copy
      className={classes(className, { active: isCopied })}
      onClick={() => handleCopyClick()}
      data-tooltip={isCopied ? 'Copiado!' : 'Copiar'}>
      <CopyIcon />
    </Copy>
  );
};
