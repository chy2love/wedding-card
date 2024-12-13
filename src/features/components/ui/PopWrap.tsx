export default function PopWrap({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="fixed top-0 bottom-0 w-full flex items-center justify-center left-[50%] translate-x-[-50%] max-w-[440px] bg-[rgba(0,0,0,0.7)] z-[9999] px-5">
      {children}
    </div>
  );
}
