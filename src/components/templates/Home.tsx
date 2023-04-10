import Button from "@/components/molecules/Button";
import { UserTracker } from "@/domain/model/UserTracker";
import GentlyShakingInteraction from "@/components/atoms/GentlyShakingInteraction";

type Props = {
  track: UserTracker["track"];
};

export default function Home({ track }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className={"flex space-x-2"}>
        <div className={"flex items-center"}>
          <GentlyShakingInteraction>
            <Button
              onClick={() => track("home:product-tour-button:click")}
              variant={"CTA"}
            >
              무료 체험 시작하기
            </Button>
          </GentlyShakingInteraction>
        </div>
        <Button onClick={() => track("home:apply-button:click")}>
          사용 신청하기
        </Button>
      </div>
    </div>
  );
}
