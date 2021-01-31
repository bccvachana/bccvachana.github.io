import { FC } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import {
  PageLoading, Navbar, Header, About
} from 'components';
import { PageContainer } from 'components/UI';
import { useApp } from 'hooks';
import { setIsImgLoaded } from 'store/page/func';
import { delayFunc } from 'utils/func';
import 'styles/global.scss';

const App: FC = () => {
  useApp();

  return (
    <OnImagesLoaded
      onLoaded={async () => {
        await delayFunc(1000);
        setIsImgLoaded(true);
      }}
    >
      <PageLoading />
      <Navbar />
      <PageContainer bodyClassName="page">
        <Header />
        <About />
      </PageContainer>
    </OnImagesLoaded>
  );
};

export default App;
