import axios from "axios";
import { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
function App() {
  const bearer = "Bearer ";
  // const token = `<div class='alert alert-success'>Registration successful, going to login page!</div>
  // <script language='javascript'>
  //   Cookies.set("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MjQiLCJpYXQiOjE2OTkyNzUzMjMsIm5iZiI6MTY5OTI3NTMyMywiZXhwIjoxNzAxODY3MzIzLCJkYXRhIjp7InVzZXJpZCI6NDkxMTI2MCwiZW1haWwiOiJodXkwMjRAZ21haWwuY29tIiwiaXAiOiI1NC44Ni41MC4xMzkifX0.toIilPtvGVxRYeZeQ5OJCwhj5pw_Vl-ey40573qD-gY");
  //       Cookies.set("code","1S8b");
  //       window.setTimeout( function() {
  //       window.location = 'activate.html';
  //       }, 3000);
  // </script>`;
  // console.log(bearer.concat(token.toString().split(`"`)[3]));

  const [score, setScore] = useState(0);
  const listData = useRef([["TK", "MK", "TOKEN"]]).current;

  const token1 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MjUiLCJpYXQiOjE2OTk0NTg2NDQsIm5iZiI6MTY5OTQ1ODY0NCwiZXhwIjoxNzAyMDUwNjQ0LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc4NywiZW1haWwiOiJodXkwMjVAZ21haWwuY29tIiwiaXAiOiI1NC44Ni41MC4xMzkifX0.5uh4m5_iZPoiVxoLYeZO-aIIqVb5B_Aate32MBwis8g";
  const token2 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MjYiLCJpYXQiOjE2OTk0NTg2NjYsIm5iZiI6MTY5OTQ1ODY2NiwiZXhwIjoxNzAyMDUwNjY2LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc4OCwiZW1haWwiOiJodXkwMjZAZ21haWwuY29tIiwiaXAiOiI1NC44Ni41MC4xMzkifX0.KHG8ZQcBD3lpWCxKtdejpOAU3CiCUR7Dk952yKInkhY";
  const token3 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MjciLCJpYXQiOjE2OTk0NTg2ODYsIm5iZiI6MTY5OTQ1ODY4NiwiZXhwIjoxNzAyMDUwNjg2LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc4OSwiZW1haWwiOiJodXkwMjdAZ21haWwuY29tIiwiaXAiOiI1NC44Ni41MC4xMzkifX0.c5IRRwAswVgr1Pxifhr3rVzD8gaAErOSB0mzTUhaf2Q";
  const token4 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MjgiLCJpYXQiOjE2OTk0NTg3MDQsIm5iZiI6MTY5OTQ1ODcwNCwiZXhwIjoxNzAyMDUwNzA0LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5MCwiZW1haWwiOiJodXkwMjhAZ21haWwuY29tIiwiaXAiOiI1NC44Ni41MC4xMzkifX0.sDAFoeCBMuJjqBgF43_DCZa-lgOOzucsH2q9KOjlAiA";
  const token5 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MjkiLCJpYXQiOjE2OTk0NTg3MjIsIm5iZiI6MTY5OTQ1ODcyMiwiZXhwIjoxNzAyMDUwNzIyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5MSwiZW1haWwiOiJodXkwMjlAZ21haWwuY29tIiwiaXAiOiI1NC44Ni41MC4xMzkifX0.vBDoj4ntQrpysTzjrhSVB9TXib3-vlSqXeytTcItBYE";
  const token6 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzAiLCJpYXQiOjE2OTk0NTg3NDYsIm5iZiI6MTY5OTQ1ODc0NiwiZXhwIjoxNzAyMDUwNzQ2LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5MiwiZW1haWwiOiJodXkzMEBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.e1uZyT3hyHxUNrcv3cA5d0esxB9_RxfcrW1LNomuDrU";
  const token7 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzEiLCJpYXQiOjE2OTk0NTg3NjgsIm5iZiI6MTY5OTQ1ODc2OCwiZXhwIjoxNzAyMDUwNzY4LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5MywiZW1haWwiOiJodXkzMUBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.Urur18yh-7co3aa8KSl6KeLpyhiG0v7fZe5ltHVyHuo";
  const token8 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzIiLCJpYXQiOjE2OTk0NTg3ODMsIm5iZiI6MTY5OTQ1ODc4MywiZXhwIjoxNzAyMDUwNzgzLCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5NCwiZW1haWwiOiJodXkzMkBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.HMMtqG_8Grsoe0WrTEoXCStRKgZQHmYTY84M44yOYEs";
  const token9 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzMiLCJpYXQiOjE2OTk0NTg4MDIsIm5iZiI6MTY5OTQ1ODgwMiwiZXhwIjoxNzAyMDUwODAyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5NSwiZW1haWwiOiJodXkzM0BnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.OGsn9KFAqTr307SSdivjPFL_3706UL1E3VPaBIxqZ9o";
  const token10 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzQiLCJpYXQiOjE2OTk0NTg4MjIsIm5iZiI6MTY5OTQ1ODgyMiwiZXhwIjoxNzAyMDUwODIyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5NiwiZW1haWwiOiJodXkzNEBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.O5V9tANqfHZHsK2k5G9JazUO9gl0lwcUHJ9E22l1sgA";
  const token11 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzUiLCJpYXQiOjE2OTk0NTg4NDIsIm5iZiI6MTY5OTQ1ODg0MiwiZXhwIjoxNzAyMDUwODQyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5NywiZW1haWwiOiJodXkzNUBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.i3Emac2od_sktxrMs607AcSJrmkF1qgTvxpbYgxYAOA";
  const token12 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzYiLCJpYXQiOjE2OTk0NTg4NjEsIm5iZiI6MTY5OTQ1ODg2MSwiZXhwIjoxNzAyMDUwODYxLCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5OCwiZW1haWwiOiJodXkzNkBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.P8ARX_37fZ_f7CVQjpfjX9oelZ5PTRt0ikpNKkWGsf4";
  const token13 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzciLCJpYXQiOjE2OTk0NTg4NzYsIm5iZiI6MTY5OTQ1ODg3NiwiZXhwIjoxNzAyMDUwODc2LCJkYXRhIjp7InVzZXJpZCI6NDkxMTc5OSwiZW1haWwiOiJodXkzN0BnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.947OTWXjPbVePDToUprARYwcpIWKojtCjP6j0C-ac2k";
  const token14 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzgiLCJpYXQiOjE2OTk0NTg4OTIsIm5iZiI6MTY5OTQ1ODg5MiwiZXhwIjoxNzAyMDUwODkyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwMCwiZW1haWwiOiJodXkzOEBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.ZgUV1YLpY_v7loVpnYjfFMHM54Tavx-AyAB-eI_j-qg";
  const token15 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0MzkiLCJpYXQiOjE2OTk0NTg5MDgsIm5iZiI6MTY5OTQ1ODkwOCwiZXhwIjoxNzAyMDUwOTA4LCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwMSwiZW1haWwiOiJodXkzOUBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.N5akpioo5ZkTmwe2MeRH3KNyU1W8qBrdjWmx7sYmAVs";
  const token16 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0NDAiLCJpYXQiOjE2OTk0NTg5MjgsIm5iZiI6MTY5OTQ1ODkyOCwiZXhwIjoxNzAyMDUwOTI4LCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwMiwiZW1haWwiOiJodXk0MEBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.26neSFfOkhcin6XjoAHSbyaOKqfuJ_4icFnqgGokLWo";
  const token17 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0NDEiLCJpYXQiOjE2OTk0NTg5NDIsIm5iZiI6MTY5OTQ1ODk0MiwiZXhwIjoxNzAyMDUwOTQyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwMywiZW1haWwiOiJodXk0MUBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.HqhW4tjm-emPnIDtXVwGYjDVaxzclpSzQEfchdw_kl8";
  const token18 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0NDIiLCJpYXQiOjE2OTk0NTg5NjIsIm5iZiI6MTY5OTQ1ODk2MiwiZXhwIjoxNzAyMDUwOTYyLCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwNSwiZW1haWwiOiJodXk0MkBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.EHQyMTcvD4cMYFA3j1ZVOiHJtieGNViovOWYNzGUCOM";
  const token19 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0NDMiLCJpYXQiOjE2OTk0NTg5NzgsIm5iZiI6MTY5OTQ1ODk3OCwiZXhwIjoxNzAyMDUwOTc4LCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwNiwiZW1haWwiOiJodXk0M0BnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ.pfvzEHm_9aWfbKCu_y3A7BX9zKWRnQTG6AH57o4tX-4";
  const token20 =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnB3YWxsZXQiLCJhdWQiOiJ0ZXN0NDQiLCJpYXQiOjE2OTk0NTg5OTUsIm5iZiI6MTY5OTQ1ODk5NSwiZXhwIjoxNzAyMDUwOTk1LCJkYXRhIjp7InVzZXJpZCI6NDkxMTgwNywiZW1haWwiOiJodXk0NEBnbWFpbC5jb20iLCJpcCI6IjU0Ljg2LjUwLjEzOSJ9fQ._p53TBNhzvoloAz_CsBHZN5lbG-fREZacQlmyVGFVgs";

  const fetchData = async (token) => {
    const reponse = await axios.post(
      "https://api.arpwallet.com/api/user/withdraw_xrp",
      {
        address: "rNxp4h8apvRis6mJf9Sh8C6iRxfrDWN7AV",
        amount: "0.000027",
        memotag: "330225049",
        vericode: "025l7IO47861A3369Q552468D98",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    console.log(reponse.data);
    setScore((prev) => prev + 0.000027);
  };

  const register = async (index) => {
    const response = await axios.post(
      "https://api.arpwallet.com/api/user/register",
      {
        cy: "PHP",
        email: `huy${index}@gmail.com`,
        fname: `test${index}`,
        password: "test",
        r: "admin",
        username: `test${index}`,
      }
    );
    // return bearer.concat(response.data.toString().split(`"`)[3]);
    // console.log(bearer.concat(response.data.toString().split(`"`)[3]));
    listData.push([
      `huy${index}`,
      "test",
      bearer.concat(response.data.toString().split(`"`)[3]),
    ]);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     fetchData(token1);
  //     fetchData(token2);
  //     fetchData(token3);
  //     fetchData(token4);
  //     fetchData(token5);
  //     fetchData(token6);
  //     fetchData(token7);
  //     fetchData(token8);
  //     fetchData(token9);
  //     fetchData(token10);
  //     fetchData(token11);
  //     fetchData(token12);
  //     fetchData(token13);
  //     fetchData(token14);
  //     fetchData(token15);
  //     fetchData(token16);
  //     fetchData(token17);
  //     fetchData(token18);
  //     fetchData(token19);
  //     fetchData(token20);
  //   }, 70000);
  // }, []);

  useEffect(() => {
    // for (let index = 50; index <= 100; index++) {}
    register(48);
  }, []);

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(listData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "data.xlsx");

  return <div>{score}</div>;
}

export default App;
