"use client";

import Link from "next/link";
import Image from 'next/image';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GameColor = "yellow" | "green" | "purple" | "grey" | "customPurple" | "customYellow" | "customPurple2" | "customYellow2" | "customF4D621";

export interface Game {
  name: string;
  slug: string;
  color: GameColor;
  logo: string;
  showCreate: boolean;
}

interface GameCardProps {
  game: Game;
  href?: string;
  className?: string;
  hideActions?: boolean;
  variant?: 'default' | 'featured';
  isCenter?: boolean;
  date?: string;
  author?: string;
}

const colorVariants: Record<GameColor, string> = {
  yellow: "bg-[#F9D423]",
  green: "bg-[#b6df52]",
  purple: "bg-[#9D50BB]",
  grey: "bg-[#e0e1d9]",
  customPurple: "bg-[#b4a8ff]",
  customYellow: "bg-[#F9F423]",
  customF4D621: "bg-[#f4d621]",
  customPurple2: "bg-[#daa8d0]",
  customYellow2: "bg-[#f7da21]",
};

const GameLogo = ({ game, variant }: { game: Game, variant: 'default' | 'featured' }) => {
  const isFeatured = variant === 'featured';
  const { logo } = game;

  switch (logo) {
    case "rhymes":
      return (
        <svg width={isFeatured ? "64" : "56"} height={isFeatured ? "101" : "89"} viewBox="0 0 56 89" fill="none">
          <g stroke="#171717" strokeWidth="3">
            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="20.5" y="1.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="39.5" y="1.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="1.5" y="19.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="20.5" y="19.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="39.5" y="19.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="1.5" y="37.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="20.5" y="37.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="39.5" y="37.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="1.5" y="55.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="20.5" y="55.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="39.5" y="55.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="1.5" y="73.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="20.5" y="73.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="39.5" y="73.5" width="15" height="15" rx="3.5" fill="#F9D423" />
          </g>
        </svg>
      );
    case "connect":
      if (isFeatured) {
        return (
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/studio-1462723797-876f0.firebasestorage.app/o/Winning%20Colors%20logo%202.png?alt=media&token=45389315-f94d-407c-9566-61e9dc23a06b"
            alt="Winning Colors Logo"
            width={100}
            height={100}
            className="object-contain animate-slow-spin"
          />
        );
      }
      return (
        <svg width="56" height="89" viewBox="0 0 56 89" fill="none">
          <g stroke="#171717" strokeWidth="3">
            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="20.5" y="1.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="39.5" y="1.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="1.5" y="19.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="20.5" y="19.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="39.5" y="19.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="1.5" y="37.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="20.5" y="37.5" width="15" height="15" rx="3.5" fill="#F9D423" />
            <rect x="39.5" y="37.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="1.5" y="55.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="20.5" y="55.5" width="15" height="15" rx="3.5" fill="white" />
            <rect x="39.5" y="55.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="1.5" y="73.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="20.5" y="73.5" width="15" height="15" rx="3.5" fill="#2ECC71" />
            <rect x="39.5" y="73.5" width="15" height="15" rx="3.5" fill="white" />
          </g>
        </svg>
      );
    case "things":
      return (
        <svg width={isFeatured ? "77" : "68"} height={isFeatured ? "77" : "68"} viewBox="0 0 68 68" fill="none">
          <g stroke="#171717" strokeWidth="3">
            <rect x="1.5" y="1.5" width="15" height="15" rx="1.5" fill="white" />
            <rect x="18.5" y="1.5" width="15" height="15" rx="1.5" fill="#F9D423" />
            <rect x="35.5" y="1.5" width="15" height="15" rx="1.5" fill="white" />
            <rect x="52.5" y="1.5" width="15" height="15" rx="1.5" fill="#F9D423" />
            <rect x="1.5" y="18.5" width="15" height="15" rx="1.5" fill="white" />
            <rect x="18.5" y="18.5" width="15" height="15" rx="1.5" fill="#9D50BB" />
            <rect x="35.5" y="18.5" width="15" height="15" rx="1.5" fill="#9D50BB" />
            <rect x="52.5" y="18.5" width="15" height="15" rx="1.5" fill="white" />
            <rect x="1.5" y="35.5" width="15" height="15" rx="1.5" fill="#9D50BB" />
            <rect x="18.5" y="35.5" width="15" height="15" rx="3.5" fill="#9D50BB" />
            <rect x="35.5" y="35.5" width="15" height="15" rx="1.5" fill="#9D50BB" />
            <rect x="52.5" y="35.5" width="15" height="15" rx="1.5" fill="white" />
            <rect x="1.5" y="52.5" width="15" height="15" rx="1.5" fill="#F9D423" />
            <rect x="18.5" y="52.5" width="15" height="15" rx="1.5" fill="white" />
            <rect x="35.5" y="52.5" width="15" height="15" rx="1.5" fill="#2ECC71" />
            <rect x="52.5" y="52.5" width="15" height="15" rx="1.5" fill="white" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export function GameCard({ game, href, className, hideActions, variant = 'default', isCenter = false, date, author }: GameCardProps) {
  const isPlayable = game.slug === '21-things' || game.slug === '6-pics' || game.slug === 'connect-5';
  const gameHref = `/games/${game.slug}`;

  if (variant === 'featured') {
    if (isPlayable) {
      return (
        <Link href={gameHref} className={cn("block h-full group cursor-pointer", className)}>
          <Card className="h-full flex flex-col items-center justify-center p-6 text-center shadow-sm border-2 bg-white transition-all duration-300 group-hover:shadow-md">
              <GameLogo game={game} variant="featured" />
              <h2 className="text-3xl font-headline font-black mt-3 text-black">{game.name}</h2>
              <p className="text-base mt-1 text-gray-500">{date}</p>
              <div className="w-16 h-px bg-gray-300 my-2"></div>
              <p className="text-base text-gray-500">by {author}</p>
          </Card>
        </Link>
      );
    }
    return (
      <div className={cn("block h-full group cursor-default", className)}>
        <Card className="h-full flex flex-col items-center justify-center p-6 text-center shadow-sm border-2 bg-white transition-all duration-300 group-hover:shadow-md">
            <GameLogo game={game} variant="featured" />
            <h2 className="text-3xl font-headline font-black mt-3 text-black">{game.name}</h2>
            <p className="text-base mt-1 text-gray-500">{date}</p>
            <div className="w-16 h-px bg-gray-300 my-2"></div>
            <p className="text-base text-gray-500">by {author}</p>
            <p className="mt-4 font-bold text-gray-400">Coming Soon</p>
        </Card>
      </div>
    );
  }

  return (
    <Card className={cn("h-full flex flex-col overflow-hidden rounded-lg shadow-sm border-2 border-[#dcdcdc]", className)}>
        <CardContent className={cn("flex flex-col items-center justify-center p-6 h-[220px]", colorVariants[game.color])}>
            <GameLogo game={game} variant="default" />
            <h2 className="font-headline font-black text-2xl mt-4 text-black">{game.name}</h2>
        </CardContent>
        {!hideActions && (
            <CardFooter className="flex flex-col gap-2 p-4 bg-white">
                <Link 
                  href={isPlayable ? gameHref : "#"} 
                  className={cn(buttonVariants({ variant: "outline" }), "w-full border-2 font-headline font-black text-lg select-none min-h-[44px]")}
                >
                    {isPlayable ? 'Play' : 'Coming Soon'}
                </Link>
                {isPlayable && (
                    <Button variant="outline" className="w-full border-2 font-headline font-black text-lg select-none min-h-[44px]">Archive</Button>
                )}
            </CardFooter>
        )}
    </Card>
  );
}
