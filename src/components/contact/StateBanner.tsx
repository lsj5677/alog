export type StateBannerData = {
  message: string;
  state: "success" | "error";
};

export default function StateBanner({
  stateBanner: { message, state },
}: {
  stateBanner: StateBannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❌";

  return (
    <div>
      <p
        className={`w-full rounded-sm p-2 text-center ${
          isSuccess ? "bg-green-300" : "bg-red-300"
        }`}
      >{`${icon} ${message}`}</p>
    </div>
  );
}
