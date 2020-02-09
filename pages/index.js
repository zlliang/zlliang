import Page from "../components/layout";
import Header from "../components/index/header";
import Bio from "../components/index/bio";

export default function Index() {
  return (
    <Page isIndex>
      <Header />
      <Bio />
    </Page>
  );
}
