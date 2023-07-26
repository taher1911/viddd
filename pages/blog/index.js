import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { videoRecapPath, videosPath } from "../../videos";
import EmojiList from "../../components/EmojiAnimation";

const videos = {
    id: 0,
    path: videosPath
}

var width = 200;
var height = 200;
if (typeof globalThis.window !== 'undefined') {
    width = globalThis.window.outerWidth
    height = globalThis.window.outerHeight
}
export default function Blog({ }) {

    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-1 flex-col p-10 pt-4">
                <div className="flex flex-row">
                    <h1 className="text-3xl italic font-medium font-serif text-black">
                        {'Selling Sunset'}
                    </h1>
                    <h1 className="text-3xl font-medium font-serif text-black ml-2">
                        {' Season-Finale Recap : Total Team Player'}
                    </h1>
                </div>
                <div className="flex flex-row">
                    <h1 className="text-xs italic font-serif text-black">
                        {'By Anne Victoria Clark,'}
                    </h1>
                    <h1 className="text-xs italic font-serif text-gray-600 ml-1">
                        {'A Vulture writer who covers Comedy and TV'}
                    </h1>
                </div>
                <div className="h-0.5 w-full bg-gray-400 mt-4" />
                <div className="h-96 w-1/2 relative self-center mt-4">
                    <Image
                        src={'./blogPicture.png'}
                        layout='fill'
                        style={{ alignSelf: 'center', marginTop: 5 }}
                        alt={"play"}
                    />
                </div>
                <div className="w-1/2 relative mt-4 self-center">
                    <h1 className="text-sm font-serif font-medium text-black mt-2 text-start">
                        The market is slowing down, and if this show were about real estate, that would be a problem. But this season of Selling Sunset felt different. It may be the lack of Christine, but everything seems more serious and slightly darker. Christine’s antics were over-the-top, outlandish reality-TV fodder — she was a person who truly believed she was a Real Housewife and acted like it. To varying degrees, the rest of the women have always tried to insist they are on a show about real estate and that the drama is a distraction from their mission to bring more business to the Oppenheim Group. Mary, in particular, suffers from this confusion, and this time around, it felt like she was struggling more than ever. In the wake of Christine’s removal, she tried so hard not to give air to any drama not relating to the sale of a house. Mary spent this whole season fighting not with her friends but with the very existence of a show threatening to take them away. She never stood a chance, though. The show’s new additions undermined her at every turn. After all, they haven’t been through five seasons of this, and they don’t understand what’s at stake the way Mary does.
                        <h1 className="text-sm font-serif font-medium text-black mt-4 text-start">
                            With Christine gone, this season’s villain was Nicole, who brings a grittier, darker energy to the whole endeavor. Instead of relishing in her status the way Christine did, the show makes a point, over and over again, to show us Nicole’s ostracization from the group. When she storms off after her confrontation with Chrishell at Heather’s baby shower in episode ten, the camera follows her just to show us that she’s angrily milling about the party alone, not a friend in sight to lean on. It almost makes me pity her. Almost. After all, she is a grown woman, and she chose to approach Emma, the best friend of her mortal enemy, in an attempt to win her over. She does this without feeling, like a true businesswoman, suggesting that her efforts to destroy Chrishell could be entirely separate from her relationship with Emma. This isn’t something a person with a basic understanding of human friendship would believe is possible, so it’s not clear what Nicole thought would come of that. But practically everyone has made a point to mention that Nicole wasn’t like this before she was on the show. Does she not appreciate that what she’s done on-camera could affect her life outside the show? Or did she simply bite off more than she could chew? Is this a woman caught in quicksand, struggling to free herself and sinking deeper before our very eyes? God, I hope not.
                        </h1>
                        <h1 className="text-sm font-serif font-medium text-black mt-4 text-start">
                            Chelsea has a relatively better handle on things. Though she became a secondary villain this season, she makes a last-minute face turn when she decides to get vulnerable for the viewing public in the final episode. She opens up about what’s fueling her distaste for Bre’s life choices, and — as is usually the case — it has nothing to do with Mr. Christ. She reveals to Emma that as a child, her mother chose to leave her alone in the U.K. with her father for a job opportunity in the U.S. It’s a decision that had a massive impact on her childhood and something Chelsea clearly has only been able to get past by contextualizing it in terms of a sacrifice her mother was forced to make to better all their lives. The notion, then, that someone would freely choose not to live in the same home as their child triggers emotions in Chelsea she hasn’t clearly expressed until now. With this, she won me back over. It’s so bittersweet to see someone on a reality show admitting that their beef with a co-star might just be misdirected anger toward their parents. It’s a shame that Bre and Chelsea ended up here, because they have both revealed themselves as women who are heavily overcompensating for their childhood trauma. In another world, they might’ve forged a deep bond. Oh well!
                        </h1>
                        There is a point, though, at her dinner with Jason, when Chelsea almost makes a big mistake. She attempts to pull him into her conflict with Bre, suggesting that people would behave better if he were around more. If there’s anything all of these women need to internalize, it’s that Jason is a trap. Of course, Chelsea assumes that aligning with the center of power — the co-owner of the brokerage — would offer some form of protection, that his presence could reinstate some order. But Mary’s continued lack of protection proves that Jason is a malignant wielder of his power, using it solely to exploit people for personal gain. If that means destroying these women’s lives on TV to drum up press for his brokerage, so be it. “I have given so much in the past couple months just to be a fucking team player,” Mary later tells Chrishell, again in tears, during their final conversation.
                        <h1 className="text-sm font-serif font-medium text-black mt-4 text-start">
                            In the last scene of this season, Mary flat-out tells Chrishell her misgivings about the penthouses don’t matter because it’s something they’re promoting “as a team.” When Chrishell declines to promote them anyway, Mary asks, “How is that being a total team player?” “It’s not,” Chrishell answers. Did Mary know that was an option? She clings to the word team, but what she really means is Jason. She reveals that her father is not doing well and that her life is going “to pieces,” and, ultimately, she doesn’t understand how she can give so much and receive so little. But I do. After all, the person she’s been making these sacrifices for is Jason, a man who could not be more open about how uninterested he is in serious emotional commitments, and friendship — real friendship — is also a serious emotional commitment.
                        </h1>
                        <h1 className="text-sm font-serif font-medium text-black mt-4 text-start">
                            But Mary has built so much of her identity on this show around being a good employee; it’s like she’s lost sight of what it means to have real friends and not just co-workers you like hanging out with. Now here’s Chrishell, announcing she doesn’t care about propping up Jason’s world anymore, and devastatingly, she’s better for it. “I’m not giving my end-all and be-all to this office, I’m not, but I am …” she hesitates, before Mary knowingly finishes the sentence for her: “Happy.” She offers that word like a resignation. And as she watches Chrishell leave to spend an Australian summer with her great love, Mary’s eyes again fill with tears. How many friends can this woman lose before she breaks? We leave her surrounded by professional contacts but sitting alone in an overpriced penthouse on Hollywood Boulevard, where the smog of industry overpowers any hint of the ocean. She has sunk years of her life into this place, and for what? Christine is gone, Chrishell is over it, and Amanza is discussing funeral arrangements. Now, the person she built this place for demands she gets him a million more dollars out of it. Instead of taking in the expensive view, her eyes remain fixed on the floor, the same one she picked a fight with her husband over on Jason’s behalf. I hope that, in some way, she really does understand more than we know.
                        </h1>
                    </h1>
                </div>
            </div>
        </>
    );
}