import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../Constants";
import { RootState } from "../Store";
import { changeImageType, PokemonImageType } from "../Store/imageTypeSlice";

const PageHeader = () =>{
    const type = useSelector((state: RootState) => state.imageType.type)
    const dispatch = useDispatch()

    return(
        <Header>
            <Title>
                <Link to ="">Pokémon</Link>
            </Title>
             <Select value={type} onChange={(e) => {
                    dispatch(changeImageType({
                    type: e.target.value as PokemonImageType
                    }))
            }}>
                <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
                <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
                <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
            </Select>

        </Header>
    );
}

const Header = styled.nav`
    display: flex;
    padding: 16px 32px;
    margin-bottom: 16px;
    border-bottom: 1px solid #c0c0c0;
`
const Title = styled.h1`
    margin: 0;
    font-size: 32px;
    color: #ffca09;
    text-shadow: -1px 0 blue, 0 2px blue, 1px 0 blue, 0 -1px blue;
`
const Select = styled.select`
    display: flex;
    margin-left: auto;
    padding: 8px 12px;
    border-radius: 8px;
`

export default PageHeader