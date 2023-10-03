import { Highlight, themes } from 'prism-react-renderer';

type CodeBlockProps = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
};

const CodeBlock = (props: CodeBlockProps) => {
  const { code, language = 'tsx', showLineNumbers = true } = props;
  return (
    <div className="rounded-lg from-pink-300/50 via-sky-300/70 to-violet-300/50 p-px dark:bg-gradient-to-tr">
      <Highlight theme={themes.oneDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className="overflow-auto rounded-lg px-2.5 py-2.5 text-xs"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {showLineNumbers && (
                  <span className="mr-1 inline-block w-5 opacity-25">
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
