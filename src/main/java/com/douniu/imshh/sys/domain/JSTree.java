package com.douniu.imshh.sys.domain;

import java.util.List;

public class JSTree {
	private String id;
	private String text;
	private String icon = "false";
	private State state;
	
	private List<JSTree> children;
	
	public JSTree(){super();}
		
	public JSTree(String id, String text, String icon, boolean opened, boolean disabled, boolean selected) {
		super();
		this.id = id;
		this.text = text;
		this.icon = icon;
		this.state = new State(opened, disabled, selected);
	}
	
	public JSTree(String id, String text){
		this(id, text, "false", true, false, false);
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public List<JSTree> getChildren() {
		return children;
	}
	public void setChildren(List<JSTree> children) {
		this.children = children;
	}		
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}
	
	public void selectNode(){
		this.state.selected = true;
	}
	
	public void opendNode(){
		this.state.opened = true;
	}

	@Override
	public String toString() {
		return "JSTree [id=" + id + ", text=" + text + ", children=" + children + "]";
	}
	
	class State{
		private boolean opened;
		private boolean disabled;
		private boolean selected;
				
		public State(boolean opened, boolean disabled, boolean selected) {
			super();
			this.opened = opened;
			this.disabled = disabled;
			this.selected = selected;
		}
		
		public boolean isOpened() {
			return opened;
		}
		public void setOpened(boolean opened) {
			this.opened = opened;
		}
		public boolean isDisabled() {
			return disabled;
		}
		public void setDisabled(boolean disabled) {
			this.disabled = disabled;
		}
		public boolean isSelected() {
			return selected;
		}
		public void setSelected(boolean selected) {
			this.selected = selected;
		}		
	}
}
