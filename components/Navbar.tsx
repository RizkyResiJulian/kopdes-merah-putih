"use client";
import {useState} from "react";
import {Menu,X,ChevronDown,UserRound} from "lucide-react";
import {site} from "@/data/site";

const links=[
 ["Beranda","/"], ["Tentang","/tentang"], ["Unit Usaha","/unit-usaha"],
 ["Keanggotaan","/keanggotaan"], ["Kegiatan","/kegiatan"], ["Potensi Desa","/potensi-desa"],
 ["Kemitraan","/kemitraan"], ["Kontak","/kontak"]
];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="navbar"><div className="nav-inner">
  <a className="brand" href="/" onClick={()=>setOpen(false)}>
   <img className="brand-logo" src="/images/brand/logo-kopdes.png" alt="Logo KOPDES Merah Putih"/>
   <span className="brand-name"><strong>Koperasi Desa/Kelurahan</strong><small>Merah Putih</small><strong>Karangwangi</strong></span>
  </a>
  <nav className={"nav-links "+(open?"open":"")}>
   {links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}{label==="Unit Usaha"&&<ChevronDown size={1}/>}</a>)}
   <a
    className="nav-login"
    href={site.registrationUrl}
    onClick={() => setOpen(false)}
    >
    <UserRound size={16} />
    Daftar
    </a>
  </nav>
 </div></header>
}
