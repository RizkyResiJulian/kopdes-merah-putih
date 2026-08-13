import {Store,WalletCards,Package,Truck} from "lucide-react";
export default function UnitIcon({type}:{type:string}){const C=type==="store"?Store:type==="wallet"?WalletCards:type==="package"?Package:Truck;return <C size={25} strokeWidth={2}/>}
