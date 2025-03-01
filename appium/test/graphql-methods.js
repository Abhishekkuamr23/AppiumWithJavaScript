const url = "https://api.hims.dev/graphql";
const isHims = process.env.SITE_ID === "hims";
const isHers = process.env.SITE_ID === "hers";

const nonceQuery = `mutation mobileE2EGenerateNonce($email: String!, $strict: Boolean) {
    generateNonce(email: $email, strict: $strict) {
      nonce
    }
  }`;

const registerQuery = `mutation mobileE2ERegister($email: String!, $password: String!, $siteId: SiteId!, $nonce: String, $captcha: String) {
    register(email: $email, password: $password, siteId: $siteId, nonce: $nonce, captcha: $captcha) {
      token
      user {
        email
        id
        status
      }
    }
  }`;

  const loginBearerQuery = `mutation mobileE2ELogin($email: String!, $nonce: String!, $password: String!) {
    login(email: $email, nonce: $nonce, password: $password) {
      ... on Login {
        token
        user {
          status
        }
      }
    }
  }`;

  const fetchNonce = async (email, strict = false) => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "8c3ea5f41d086931e14a65c60a3ddd940337326c8a743e98ebfb210dd600766b",
      },
      body: JSON.stringify({
        query: nonceQuery,
        variables: { email, strict },
      }),
    });
    const data = await result.json();
    return data.data.generateNonce.nonce;
  };

const fetchAuth = async (email, password, nonce) => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "8c3ea5f41d086931e14a65c60a3ddd940337326c8a743e98ebfb210dd600766b",
      },
      body: JSON.stringify({
        query: loginBearerQuery,
        variables: { email, password, nonce },
      }),
    });
    const data = await result.json();
    return data.data.login.token;
  };

const registerUser = async (user) => {
    const nonce = await fetchNonce(user.email, true);
    const data = await makeGQLRequestNoLogin(registerQuery, {
      email: user.email,
      password: user.password,
      siteId: isHers ? "hers" : "hims",
      nonce: nonce,
      captcha: null,
    });
    return data.register;
  };

  const makeGQLRequestNoLogin = async (
    query,
    variables = {},
    extraHeaders = {},
  ) => {
    const headers = {
      "Content-Type": "application/json",
      "User-Agent":
        "8c3ea5f41d086931e14a65c60a3ddd940337326c8a743e98ebfb210dd600766b",
      "x-himshers-siteid": isHers ? "hers" : "hims",
      ...extraHeaders,
    };
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query: query,
        variables: { ...variables },
      }),
    });
    const data = await result.json();
    return data.data;
  };
  export {
    registerUser,
  };
  