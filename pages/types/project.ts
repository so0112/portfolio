export interface result {
  properties: {
    Name: {
      title: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          // annotations: {
          //   bold: boolean;
          //   italic: boolean;
          //   strikethrough: boolean;
          //   underline: boolean;
          //   code: boolean;
          //   color: string;
          // };
          plain_text: string;
          href: null;
        }
      ];
    };
  };
}
