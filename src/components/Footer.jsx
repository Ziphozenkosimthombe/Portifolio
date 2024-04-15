import SocialMedia from "./SocialMedia"
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-slate-900 text-white mt-32">
        <h3 className="font-bold text-2xl mt-5">Zipho Ncayiyana</h3>
        <SocialMedia />
        <p className="mt-5">© 2024 - All Rights Reserved by Z.Mthombe</p>
    </footer>
  )
}

export default Footer