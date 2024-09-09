import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecaptchasList } from "./recaptchas/RecaptchasList";
import { RecaptchasCreate } from "./recaptchas/RecaptchasCreate";
import { RecaptchasEdit } from "./recaptchas/RecaptchasEdit";
import { RecaptchasShow } from "./recaptchas/RecaptchasShow";
import { ProxiesList } from "./proxies/ProxiesList";
import { ProxiesCreate } from "./proxies/ProxiesCreate";
import { ProxiesEdit } from "./proxies/ProxiesEdit";
import { ProxiesShow } from "./proxies/ProxiesShow";
import { StreamsList } from "./streams/StreamsList";
import { StreamsCreate } from "./streams/StreamsCreate";
import { StreamsEdit } from "./streams/StreamsEdit";
import { StreamsShow } from "./streams/StreamsShow";
import { SystemConfigList } from "./systemConfig/SystemConfigList";
import { SystemConfigCreate } from "./systemConfig/SystemConfigCreate";
import { SystemConfigEdit } from "./systemConfig/SystemConfigEdit";
import { SystemConfigShow } from "./systemConfig/SystemConfigShow";
import { LikesList } from "./likes/LikesList";
import { LikesCreate } from "./likes/LikesCreate";
import { LikesEdit } from "./likes/LikesEdit";
import { LikesShow } from "./likes/LikesShow";
import { CommentsList } from "./comments/CommentsList";
import { CommentsCreate } from "./comments/CommentsCreate";
import { CommentsEdit } from "./comments/CommentsEdit";
import { CommentsShow } from "./comments/CommentsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Automatización de Chaturbate"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recaptchas"
          list={RecaptchasList}
          edit={RecaptchasEdit}
          create={RecaptchasCreate}
          show={RecaptchasShow}
        />
        <Resource
          name="Proxies"
          list={ProxiesList}
          edit={ProxiesEdit}
          create={ProxiesCreate}
          show={ProxiesShow}
        />
        <Resource
          name="Streams"
          list={StreamsList}
          edit={StreamsEdit}
          create={StreamsCreate}
          show={StreamsShow}
        />
        <Resource
          name="SystemConfig"
          list={SystemConfigList}
          edit={SystemConfigEdit}
          create={SystemConfigCreate}
          show={SystemConfigShow}
        />
        <Resource
          name="Likes"
          list={LikesList}
          edit={LikesEdit}
          create={LikesCreate}
          show={LikesShow}
        />
        <Resource
          name="Comments"
          list={CommentsList}
          edit={CommentsEdit}
          create={CommentsCreate}
          show={CommentsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
