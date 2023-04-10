import Button from "@/components/molecules/Button";
import { UserTracker } from "@/domain/model/UserTracker";
import GentlyShakingInteraction from "@/components/atoms/GentlyShakingInteraction";
import { Link } from "@/domain/model/Link";

type Props = {
  Link: Link;
  track: UserTracker["track"];
};

export default function Home({ Link, track }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-20">
      <div className={"flex space-x-2"}>
        <div className={"flex items-center"}>
          <GentlyShakingInteraction>
            <Link href={"/product-tour"}>
              <Button
                onClick={() => track("home:product-tour-button:click")}
                variant={"CTA"}
              >
                무료 체험 시작하기
              </Button>
            </Link>
          </GentlyShakingInteraction>
        </div>
        <Link href={"/request-to-use"}>
          <Button onClick={() => track("home:apply-button:click")}>
            사용 신청하기
          </Button>
        </Link>
        <Link href={"/signup"}>
          <Button onClick={() => track("home:signup:click")}>
            회원 가입하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
