
import { CopyIcon } from 'components/icons';
import { classes } from 'helpers';
import React from 'react';

import {
  Copy
} from './copyButton.styles';

export interface CopyButtonProps {
  value?: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {

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
      className={classes({ active: isCopied })}
      onClick={() => handleCopyClick()}
      data-tooltip={isCopied ? 'Copiado!' : 'Copiar'}>
      <CopyIcon />
    </Copy>
  );
};
