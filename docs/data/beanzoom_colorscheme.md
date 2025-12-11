/* Core Metallic Button Styles */
.btn-metallic {
  /* 1. The Metallic Gradient */
  /* Creates: Dark Edge -> Blue -> Bright Shine -> Blue -> Dark Edge */
  background: linear-gradient(
    110deg,
    #0F2039 0%,    /* Dark Navy */
    #0055A4 40%,   /* Mid-Blue */
    #A0E4FF 50%,   /* The "Chrome" Shine (Ice Blue) */
    #0055A4 60%,   /* Mid-Blue */
    #0F2039 100%   /* Dark Navy */
  );
  
  /* 2. Sizing & Text */
  background-size: 200% auto; /* Allows the background to move on hover */
  color: white;
  padding: 15px 40px;
  font-family: sans-serif; /* Recommend: 'Montserrat' or 'Eurostile' */
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  
  /* 3. Subtle Depth (Shadow) */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  border-radius: 4px;
}

/* Hover Effect: Moves the "shine" across the button */
.btn-metallic:hover {
  background-position: right center; /* Simulates light reflection moving */
  box-shadow: 0px 6px 15px rgba(0, 122, 204, 0.4); /* Blue glow */
  transform: translateY(-2px); /* Slight lift */
}

/* Variant: The "Speed" Button (Skewed) */
.btn-speed {
  transform: skewX(-15deg); /* Tilts the button like the logo */
}

/* Counter-skew the text so it stays upright inside the skewed button */
.btn-speed span { 
  display: inline-block;
  transform: skewX(15deg); 
}