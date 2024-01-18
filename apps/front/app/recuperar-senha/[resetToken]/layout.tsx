export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col py-8 w-full items-center justify-center">
      {children}
    </div>
  );
}
