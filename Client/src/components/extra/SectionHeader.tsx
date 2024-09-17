interface SectionHeaderProps {
  title: string;
  type?: "primary" | "secondary";
}

const SectionHeader = ({ title, type = "primary" }: SectionHeaderProps) => {
  return (
    <div
      className={`flex items-center gap-2 border border-foreground w-fit px-2 py-[2px] rounded-full my-2 ${
        type === "primary" ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          type === "primary" ? "bg-slate-800" : "bg-slate-100"
        }`}
      ></span>
      <h2 className="text-foreground font-semibold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
