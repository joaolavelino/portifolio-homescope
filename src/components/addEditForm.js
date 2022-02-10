import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AddEditForm = ({ properties, setProperties }) => {
  const initialFields = {
    id: "",
    district: "",
    city: "",
    address: "",
    number: "",
    floor: "",
    coordinateX: "",
    coordinateY: "",
    rooms: "",
    area: "",
    rent: "",
    description: "",
    location: 0,
    space: 0,
    quality: 0,
    transport: 0,
    parks: false,
    tram: false,
    train: false,
    bus: false,
    view: false,
    market: false,
    lift: false,
    school: false,
    garden: false,
    furniture: false,
    url: "",
    img: [],
  };
  const [fields, setFields] = useState(initialFields);
  const [imageFields, setImageFields] = useState([""]);
  const [showDelete, setShowDelete] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");

  const navigate = useNavigate();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    if (pathId) {
      const propertyById = properties.filter((e) => e.id == pathId)[0];
      setFields({ ...propertyById });
      setImageFields(propertyById.img);
    }
  }, []);

  useEffect(() => {
    setError("");
  }, [showDelete]);

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeParseInt = (e) => {
    setFields({
      ...fields,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const handleChangeParseFloat = (e, number) => {
    setFields({
      ...fields,
      [e.target.name]: parseFloat(e.target.value, number),
    });
  };

  const handleCheckbox = (e) => {
    if (e.target.checked)
      return setFields({ ...fields, [e.target.name]: true });
    else return setFields({ ...fields, [e.target.name]: false });
  };

  const handleImageFields = (array) => {
    const urlStringsArray = [];
    array.forEach((e) => {
      e.imageUrl.length && urlStringsArray.push(e.imageUrl);
    });

    return urlStringsArray;
  };

  const handleOverall = (a) => {
    return (a.location + a.space + a.quality + a.transport) / 4;
  };

  const handleImageAddLine = (e) => {
    setImageFields([...imageFields, ""]);
  };

  const handleImageChange = (index, e) => {
    const imageArray = [...imageFields];
    imageArray[index][e.target.name] = e.target.value;
    setImageFields(imageArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pathId) {
      const newId = uuidv4();
      console.log(newId);
      setFields({
        ...fields,
        id: uuidv4(),
        overall: handleOverall(fields),
        img: [...handleImageFields(imageFields)],
      });
      console.log(fields);
      setProperties([...properties, fields]);
      navigate(`/properties/${fields.city}`);
    } else {
      const newArray = properties.filter((e) => e.id != pathId);
      newArray.push(fields);
      setProperties(newArray);
      navigate(`/properties/listing/${pathId}`);
    }
  };

  const handleDelete = (e) => {
    if (password === "user") {
      let conf1 = window.confirm("Are you really sure? This can't be undone.");
      if (conf1) {
        setError("");
        let newArray = properties.filter((e) => e.id != pathId);
        setProperties(newArray);
        navigate("/");
      } else return;
    } else {
      setError("invalidPassword");
      return;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset className="locationInformation">
        <legend>Location Information</legend>
        <label>City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City (all lowercase)"
          value={fields.city}
          onChange={handleChange}
        />
        <label>District</label>
        <input
          type="text"
          name="district"
          id="district"
          placeholder="District"
          value={fields.district}
          onChange={handleChange}
        />
        <div className="address color">
          <label>Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={fields.address}
            onChange={handleChange}
          />
          <label>Number</label>
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Number"
            value={fields.number}
            onChange={handleChangeParseInt}
          />
          <label>Floor</label>
          <input
            type="text"
            name="floor"
            id="floor"
            placeholder="Floor"
            value={fields.floor}
            onChange={handleChangeParseInt}
          />
        </div>
        <div className="geolocation color">
          <h4>
            The coordinates allow the property to be displayed on the map. They
            must be informed in the decimal format without any unit: eg. 0.000
          </h4>
          <label>CoordinateX</label>
          <input
            type="text"
            id="coordinatex"
            placeholder="Coordinate X"
            name="coordinateX"
            value={fields.coordinateX}
            onChange={(e) => handleChangeParseFloat(e, 7)}
          />
          <label>Coordinatey</label>
          <input
            type="text"
            id="coordinatey"
            placeholder="Coordinate y"
            name="coordinateY"
            value={fields.coordinateY}
            onChange={(e) => handleChangeParseFloat(e, 7)}
          />
        </div>
        <div className="rent color">
          <label>rooms</label>
          <input
            type="text"
            name="rooms"
            id="rooms"
            placeholder="example 2.5"
            value={fields.rooms}
            onChange={(e) => handleChangeParseFloat(e, 1)}
          />
          <label>area</label>
          <input
            type="text"
            name="area"
            id="area"
            placeholder="example 75 (no unit)"
            value={fields.area}
            onChange={handleChangeParseInt}
          />
          <label>rent</label>
          <input
            type="text"
            name="rent"
            id="rent"
            placeholder="example: 2500 (no currency unit)"
            value={fields.rent}
            onChange={handleChangeParseInt}
          />
          <label>description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Brief description of the property"
            value={fields.description}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <fieldset className="ratings">
        <legend>Ratings</legend>
        <div className="inputLine">
          <label>Location</label>
          <input
            type="range"
            id="location"
            value={fields.location}
            onChange={handleChangeParseInt}
            name="location"
            min={0}
            max={10}
          />
          <h4>{fields.location}</h4>
        </div>
        <div className="inputLine">
          <label>space</label>
          <input
            type="range"
            id="space"
            value={fields.space}
            onChange={handleChangeParseInt}
            name="space"
            min={0}
            max={10}
          />
          <h4>{fields.space}</h4>
        </div>
        <div className="inputLine">
          <label>quality</label>
          <input
            type="range"
            id="quality"
            value={fields.quality}
            onChange={handleChangeParseInt}
            name="quality"
            min={0}
            max={10}
          />
          <h4>{fields.quality}</h4>
        </div>
        <div className="inputLine">
          <label>transport</label>
          <input
            type="range"
            id="transport"
            value={fields.transport}
            onChange={handleChangeParseInt}
            name="transport"
            min={0}
            max={10}
          />
          <h4>{fields.transport}</h4>
        </div>
      </fieldset>
      <fieldset className="features">
        <legend>Features</legend>
        <div className="inputLine">
          <label htmlFor="parks">Parks</label>
          <input
            type="checkbox"
            name="parks"
            id="parks"
            onChange={handleCheckbox}
            checked={fields.parks ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="tram">tram</label>
          <input
            type="checkbox"
            name="tram"
            id="tram"
            onChange={handleCheckbox}
            checked={fields.tram ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="train">train</label>
          <input
            type="checkbox"
            name="train"
            id="train"
            onChange={handleCheckbox}
            checked={fields.train ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="bus">bus</label>
          <input
            type="checkbox"
            name="bus"
            id="bus"
            onChange={handleCheckbox}
            checked={fields.bus ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="view">view</label>
          <input
            type="checkbox"
            name="view"
            id="view"
            onChange={handleCheckbox}
            checked={fields.view ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="market">market</label>
          <input
            type="checkbox"
            name="market"
            id="market"
            onChange={handleCheckbox}
            checked={fields.market ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="lift">lift</label>
          <input
            type="checkbox"
            name="lift"
            id="lift"
            onChange={handleCheckbox}
            checked={fields.lift ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="school">school</label>
          <input
            type="checkbox"
            name="school"
            id="school"
            onChange={handleCheckbox}
            checked={fields.school ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="garden">garden / balcony</label>
          <input
            type="checkbox"
            name="garden"
            id="garden"
            onChange={handleCheckbox}
            checked={fields.garden ? "checked" : ""}
          />
        </div>
        <div className="inputLine">
          <label htmlFor="furniture">furniture</label>
          <input
            type="checkbox"
            name="furniture"
            id="furniture"
            onChange={handleCheckbox}
            checked={fields.furniture ? "checked" : ""}
          />
        </div>
      </fieldset>
      <fieldset className="link">
        <label htmlFor="url">Listing url</label>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="paste url here"
          value={fields.url}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="images">
        <legend>Images</legend>
        <h4 htmlFor="img1">Paste below the image urls</h4>
        <div className="imagesDiv color">
          <button
            className="outline"
            type="button"
            onClick={handleImageAddLine}
          >
            add line
          </button>
          {imageFields.map((url, index) => (
            <div className="inputLine" key={index}>
              <input
                type="text"
                name="imageUrl"
                value={url}
                onChange={(e) => handleImageChange(index, e)}
              />
            </div>
          ))}
        </div>
      </fieldset>
      <div className="buttons">
        <button type="submit">confirm</button>
        <button
          type="button"
          className="gray small"
          onClick={() => setShowDelete(!showDelete)}
        >
          delete property
        </button>
      </div>
      {showDelete && (
        <div className="shadow">
          <div className="deleteConfirmation">
            <h4>Insert the "user" password to confirm:</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{error}</p>
            <button type="button" onClick={handleDelete}>
              ok
            </button>
            <button
              type="button"
              className=" gray"
              onClick={() => setShowDelete(!showDelete)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </StyledForm>
  );
};

const StyledForm = styled(motion.form)`
  fieldset {
    display: flex;
    flex-direction: column;
    transition: 0.4s;
    padding: 2rem;
    margin: 1rem 0;
    border: 1px solid lightgray;
    .color {
      border-radius: 5px;
      margin-top: 1rem;
      padding: 2rem;
      h4 {
        margin-bottom: 1rem;
      }
    }
    &.locationInformation {
      input {
        margin-bottom: 1rem;
      }
    }
    .address {
      background-color: lightgray;
      padding: 2rem;
    }

    .geolocation {
      background-color: #17bebb;
      color: white;
    }

    .rent {
      background-color: darkorange;
      color: white;
    }

    .imagesDiv {
      background-color: #17bebb;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &.ratings {
      gap: 1rem;
      div {
        display: flex;
        align-items: center;
        label {
          width: 10rem;
        }
        h4 {
          margin-left: 1rem;
          width: 2rem;
        }
        input {
          padding: 0;
        }
      }
    }

    &.features {
      flex-flow: row wrap;
      gap: 3rem;
      div {
        padding: 0;
      }
      input {
        margin: 0;
        display: inline;
        width: 13px;
      }
    }

    input {
      width: 100%;
      border-bottom: 2px solid lightgray;
      display: block;
      &:focus,
      &:hover {
        border-bottom: 2px solid orange;
      }
    }
  }
  .inputLine {
    display: flex;
    align-items: center;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
  }
  .shadow {
    z-index: 20;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .deleteConfirmation {
    width: 300px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #17bebb;
    border-radius: 1rem;
    transition: 0.4s;
  }
`;

export default AddEditForm;
