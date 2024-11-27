export const Background = () => {
  return (
    <>
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 -z-20 bg-[#f5f7f9] overflow-hidden">
        {/* Large gradient blobs */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full 
                     bg-gradient-to-r from-blue-100/30 to-violet-100/30
                     blur-[100px] -top-[400px] -left-[300px]
                     animate-[move_25s_infinite]"
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full 
                     bg-gradient-to-l from-pink-100/20 to-yellow-100/20
                     blur-[80px] -bottom-[300px] -right-[200px]
                     animate-[move_20s_infinite_reverse]"
        />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(209, 213, 219, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
    </>
  );
};
