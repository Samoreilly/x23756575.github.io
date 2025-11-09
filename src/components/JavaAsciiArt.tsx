export default function JavaAsciiArt() {
  const javaArt = `
     ██╗ █████╗ ██╗   ██╗ █████╗ 
     ██║██╔══██╗██║   ██║██╔══██╗
     ██║███████║██║   ██║███████║
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝
  `;

  const onTopArt = `
 ██████╗ ███╗   ██╗    ████████╗ ██████╗ ██████╗ 
██╔═══██╗████╗  ██║    ╚══██╔══╝██╔═══██╗██╔══██╗
██║   ██║██╔██╗ ██║       ██║   ██║   ██║██████╔╝
██║   ██║██║╚██╗██║       ██║   ██║   ██║██╔═══╝ 
╚██████╔╝██║ ╚████║       ██║   ╚██████╔╝██║     
 ╚═════╝ ╚═╝  ╚═══╝       ╚═╝    ╚═════╝ ╚═╝     
  `;

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0 mt-12 sm:mt-16 mb-6 sm:mb-8 px-4 sm:px-0">
      <div 
        className="flex justify-center items-center"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "center center",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="java-flip-container relative"
          style={{
            width: "100%",
            maxWidth: "350px",
            minHeight: "100px",
            transformStyle: "preserve-3d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Java Face - Front */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg) translateZ(1px)",
              transformOrigin: "center center",
            }}
          >
            <pre
              className="text-blue-400/40 text-[10px] sm:text-xs text-center font-mono leading-tight select-none w-full"
              style={{ fontFamily: "JetBrains Mono, monospace", whiteSpace: "pre" }}
            >
              {javaArt.trim()}
            </pre>
          </div>

          {/* On Top Face - Back */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)",
              transformOrigin: "center center",
            }}
          >
            <pre
              className="text-gray-400/50 text-[10px] sm:text-xs text-center font-mono leading-tight select-none w-full"
              style={{ fontFamily: "JetBrains Mono, monospace", whiteSpace: "pre" }}
            >
              {onTopArt.trim()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

