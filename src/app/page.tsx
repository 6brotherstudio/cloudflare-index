import { redirect } from "next/navigation";

//npm run dev  在本地启动开发服务器
//npm run deploy	将您的生产站点部署到 Cloudflare

export default function Home() {
  redirect("/index.html");
  return null;
}
