export default function AboutLayout({
  children,
  team,
  account,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  account: React.ReactNode;
}) {
  return (
    <main className={"container grid grid-cols-3 text-white"}>
      <div className={"col-start-1 col-end-3 bg-pink-800 flex justify-center items-center"}>{children}</div>
      <div className={"col-start-1 col-end-2 bg-pink-800 flex justify-center items-center"}>{account}</div>
      <div className={"col-start-2 col-end-3 bg-pink-800 flex justify-center items-center"}>{team}</div>
    </main>
  );
}
