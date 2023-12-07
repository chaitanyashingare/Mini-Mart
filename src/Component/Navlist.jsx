import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Navlist = () => {
  const navigate = useNavigate();
  return (
    <Box className="navlist">
      <ul>
        <li style={{ zIndex: 1000 }}>
          Groceries
          <ChevronDownIcon />
          <ul className="dropdown">
            <li onClick={() => navigate("/fruitsAndVegetables")}>
              Fruits & Vegetables
            </li>
            <li onClick={() => navigate("/beverages")}>Beverages</li>
            <li onClick={() => navigate("/electronicProducts")}>Electronics</li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};
export default Navlist;
