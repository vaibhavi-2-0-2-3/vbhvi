'use client';

import AccretionDisk from './elements/AccretionDisk';
import Starfield from './elements/Starfield';
import DustTrails from './elements/DustTrails';
import PurplePlanet from './elements/PurplePlanet';
import BrokenStarRain from './elements/DiagonalStreaks';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-[250px] overflow-hidden z-0 pointer-events-none">
      <Starfield />
      <DustTrails />
      <BrokenStarRain />
      <PurplePlanet />
      <AccretionDisk />
    </div>
  );
}
