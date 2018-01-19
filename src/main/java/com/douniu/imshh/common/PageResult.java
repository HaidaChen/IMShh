package com.douniu.imshh.common;

public class PageResult {
	private int resultCount;
    private Object result;
    
    public int getResultCount() {
		return resultCount;
	}
	public void setResultCount(int resultCount) {
		this.resultCount = resultCount;
	}
	public Object getResult() {
        return result;
    }
    public void setResult(Object result) {
        this.result = result;
    }
}
