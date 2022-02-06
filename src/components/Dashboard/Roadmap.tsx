import { Pane, Heading, Text } from 'evergreen-ui';

const Roadmap = () => {
  return (
    <>
      <Pane
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={60}
      >
        <Heading textAlign="center" fontSize={60} id="roadmap" className="h2">
          Roadmap 🖐️
        </Heading>
        <Text marginTop={60} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ✅ February 2022. Elrond Hands has landed on the Elrond Blockchain ⚡
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ✅ Early February. Twitter and discord launch
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ✅ Website launch
        </Text>

        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ❎ Presale of 100 Elrond Hands NFTs for 0.2 EGLD
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ❎ $1000 Giveaway on discord (no purchase necessary - 2 winners)
        </Text>

        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ❎ First drop of 400 Elrond Hands NFTs for 0.3 EGLD
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ❎ $2000 Giveaway on discord (no purchase necessary - 4 winners)
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ❎ Second drop of 500 Elrond Hands NFTs for 0.4 EGLD
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          ❎ $2500 BONUS Giveaway for holders (5 winners)
        </Text>
        <Heading textAlign="center" fontSize={60} marginTop={60} id="finance" className="h2">
          Finance 🤙
        </Heading>
        <Text marginTop={60} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          🖐️ 50% of the EGLD generated by the sales are staked in the EGLD/MEX pool to farm LKMex, these will be redistributed every weeks
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          🖐🏽 50% of the EGLD generated by the sales are donated to European Network Against Racism
        </Text>
        <Text marginTop={30} textAlign="center" fontSize="22px" lineHeight="35px" className="text">
          🖐🏿 100% of royalties will be reintroduced for marketing and other giveaways
        </Text>
      </Pane>
    </>
  );
};

export default Roadmap;
