import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function CircleButtonLink({ children }: Props) {
  return <Link href="/">{children}</Link>;
}
