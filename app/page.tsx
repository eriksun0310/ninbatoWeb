import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "refresh": "0;url=/privacy",
  },
};

export default function Home() {
  return (
    <meta httpEquiv="refresh" content="0;url=/privacy" />
  );
}
