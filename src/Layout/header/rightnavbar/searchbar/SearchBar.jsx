import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import useSearchParam from "../../../../core/hooks/cards/useSearchParam";
function SearchBar() {

  const [searchQuery, setSearchQuery] = useSearchParams();
  const handleChange = ({ target }) => setSearchQuery({q: target.value}); 


  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery.get('q') ?? ''}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default SearchBar;
