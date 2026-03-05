import "./App.scss";
import Background from "@/components/Background";
import Page from "@/components/Page";
import { GlobalSettingsProvider } from "@/context/GlobalSettingsContext";

function App() {
  return (
    <>
      <GlobalSettingsProvider>
        <main className="w-screen h-screen">
          <Background />
          <Page />
        </main>
      </GlobalSettingsProvider>
    </>
  );
}

export default App;
