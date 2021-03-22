const panelStyle = {
  boxSizing: 'border-box',
  width: '100%',
  padding: '0 0 75% 0',
  position: 'relative',
  border: `1px solid #323232`,
};

const descStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '75%',
  transform: 'translate(-50%, -50%)',
};

function CreativePanel() {
  return (
    <div style={panelStyle}>
      <div style={descStyle}>Panel Description</div>
    </div>
  );
}

export default CreativePanel;
